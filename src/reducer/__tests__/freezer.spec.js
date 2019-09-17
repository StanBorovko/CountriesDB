import C from '../../constants'
import F from '../../flavors'
import freezer from '../freezer'
import {updateTemperature, addProductToFreezer, removeScoop} from "../../AC";

describe("Freezer reducer", () => {
     it("should store the temperature in the state", () => {
            const newState = freezer(undefined, updateTemperature(-5))
            expect(newState.temperature).toEqual(-5)
     });
    it('should store the product in the state', () => {
        const newState = freezer(undefined, addProductToFreezer(F.MOCHA, 5))
        expect(newState.flavors[F.MOCHA]).toEqual(5)
    });
    it('should add the product in the flavor if it already exists', () => {
        const oldState = {
            flavors: {
                [F.VANILLA]: 5
            }
        }
        const newState = freezer(oldState, addProductToFreezer(F.VANILLA, 5))
        expect(newState.flavors[F.VANILLA]).toEqual(10)
    });
    it('should make sure to overflow the freezer', () => {
        const oldState = {
            flavors: {
                [F.VANILLA]: 50
            }
        }
        const newState = freezer(oldState, addProductToFreezer(F.VANILLA, 15))
        expect(newState.flavors[F.VANILLA]).toEqual(60)
    });


    it('should remove scoops from the freezer', () => {
        const oldState = {
            flavors: {
                [F.VANILLA]: 50
            }
        }
        const newState = freezer(oldState, removeScoop(F.VANILLA))
        expect(newState.flavors[F.VANILLA]).toEqual(49)
    });
    it('should not remove scoops and go below 0', () => {
        const oldState = {
            flavors: {
                [F.VANILLA]: 0
            }
        }
        const newState = freezer(oldState, removeScoop(F.VANILLA))
        expect(newState.flavors[F.VANILLA]).toEqual(0)
    });
})