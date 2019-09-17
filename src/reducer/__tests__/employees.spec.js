import C from '../../constants'
import employess from '../employees'
import {fetchEmployees} from "../../AC";

describe("Fetching employees", () => {
    describe("Request start", () => {
         it("should set the loading property to true ", () => {
            const result = employess(undefined, {
                type: C.FETCH_EMPLOYEES_REQUEST
            });
            expect(result.loading).toEqual(true)
         })
    });

    describe("Successful fetch", () => {
        it("should set the loading property to false", () => {
            const result = employess({loading: true}, {
                type: C.FETCH_EMPLOYEES_SUCCESS
            });
            expect(result.loading).toEqual(false)
        });
        it('should store the employee data', function () {
            const fakeData = [1,2,3]
            const result = employess(undefined, {
                type: C.FETCH_EMPLOYEES_SUCCESS,
                payload: fakeData
            });
            expect(result.data).toEqual(fakeData)
        });
    })

    describe("Failed fetch", () => {
        it("should set the loading property to false", () => {
            const result = employess({loading: true}, {
                type: C.FETCH_EMPLOYEES_FAILURE
            });
            expect(result.loading).toEqual(false)
        });

        it('should store the error', function () {
            const fakeError = "404 Not Found"
            const result = employess(undefined, {
                type: C.FETCH_EMPLOYEES_FAILURE,
                payload: fakeError
            });
            expect(result.error).toEqual(fakeError)
        });
    })



})