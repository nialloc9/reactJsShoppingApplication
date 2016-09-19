//APP COMPONENT
var App = React.createClass({

    //set initial state
    getInitialState: function () {
        return{
            movieList : [
                {
                    id: 0,
                    name: 'Iron Man',
                    img: 'dev/res/images/ironMan.jpg',
                    cost: 9.99
                },
                {
                    id: 1,
                    name: 'Batman vs Superman',
                    img: 'dev/res/images/bvs.jpg',
                    cost: 5.00
                },
                {
                    id: 3,
                    name: 'Captain America',
                    img: 'dev/res/images/captainAmerica.jpg',
                    cost: 12.50
                }
            ],
            cartCounter : 0,
            cartCost: 0.00,
            moviesInCart: [1, 2]
        }
    },

    addToCart: function (updateNumber, movieCost, movieId) {

        //assign variables
        var cartCounter = this.state.cartCounter,
            cartCost = this.state.cartCost,
            moviesInCart = this.state.moviesInCart;

        this.setState({
            cartCounter: cartCounter + updateNumber,
            cartCost: Math.round((cartCost + movieCost) * 100) / 100,
            moviesInCart: moviesInCart.concat(movieId)
        })

    },

    //render
    render: function () {

        //assign variables
        var movieCards = this.state.movieList,
            cartCounter = this.state.cartCounter,
            cartCost = this.state.cartCost

        return(
            <div>
                <CartCounter cartCost={cartCost} cartCounter={cartCounter}/>
                <h3>Super Awesome Super Simple ReactJs Shopping Application</h3>
                {movieCards.map(function(movie){
                    return(
                        <MovieCard addToCart={this.addToCart} key={movie.id} movie={movie}/>
                    )
                }, this)}
            </div>
        )
    }
});

//MOVIE CARD COMPONENT
var MovieCard = React.createClass({
    render: function () {

        //assign variables
        var movie = this.props.movie;

        return(
            <div className="movieCard">
                <h3>{movie.name}</h3>
                <img onClick={this.props.addToCart.bind(null, 1, movie.cost, movie.id)} src={movie.img}/>
                <p>${movie.cost}</p>
            </div>
        )
    }
});

//CART COMPONENT
var CartCounter = React.createClass({
    render: function () {

        //assign variables
        var cartCounter = this.props.cartCounter,
            cartCost = this.props.cartCost;

        return(
            <p className="cartCounter"><i className="fa fa-shopping-cart" aria-hidden="true">&nbsp;{cartCounter}&nbsp;Total&nbsp;$: {cartCost}</i></p>
        )

    }
});

ReactDOM.render(<App/>, document.getElementById('root'));