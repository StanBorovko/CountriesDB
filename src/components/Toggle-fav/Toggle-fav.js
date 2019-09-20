import React, {Component} from 'react';
import './style.css';
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {isFavorite, addToFavorites, removeFromFavorites} from "../../actions";
import C from "../../constants";

class ToggleFav extends Component {

    addToFav = country => {
        const {addToFavorites} = this.props;
        addToFavorites(country);
        this.update();
    };

    removeFromFav = country => {
        const {removeFromFavorites} = this.props;
        removeFromFavorites(country);
        this.update();
    };

    state = {
        variant: "outline-primary",
        label: "Add to Favorites",
        actionOnClick: this.addToFav
    };

    componentDidMount() {
        this.update();
    }

    componentDidUpdate(prevProps) {
        if (this.props.isFavorite !== prevProps.isFavorite) {
            this.update();
        }
    }

    update() {
        const {
            country,
            isFavorite
        } = this.props;

        isFavorite(country);

        const {isFav} = this.props;

        if (isFav) this.setState({
            variant: "outline-danger",
            label: "Remove from Favorites",
            actionOnClick: this.removeFromFav
        });

        console.log('I\'m updating, country:', country, this.state, isFav);
    };

    render() {
        const {isFav, country} = this.props;
        /*let variant = "outline-primary",
            label = "Add to Favorites",
            actionOnClick = this.addToFav;
        if (isFav) {
            variant = "outline-danger";
            label = "Remove from Favorites";
            actionOnClick = this.removeFromFav;
        }*/
        const {variant, label, actionOnClick} = this.state;
        return (
            <Button variant={variant}
                    size="sm"
                    onClick={() => actionOnClick(country)}>
                {label}
            </Button>
        );
    }
}

const mapStateToProps = ({favorites}) => {
    // console.log('favorites map', favorites);
    return {
        isFav: favorites.isFavorite
    }
};

export default connect(
    mapStateToProps,
    {isFavorite, addToFavorites, removeFromFavorites}
)(ToggleFav);
