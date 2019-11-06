import React from 'react';

const ProductData = [{
    id: 1,
    productName: 'ADemo1',
    price : "50"

},
{
    id: 2,
    productName: 'cDemo2',
    price : "80"

},
{
    id: 3,
    productName: 'BDemo3',
    price : "100"

}
];


class ProductList extends React.Component {

    constructor() {
        super();
          this.state = {
            cartData: [],
        };
    }
    addToCartClick(item) {
     //   console.log(item);
        //this.state.cartData.push(item);
        const data = this.state.cartData;
        data.push(item)
       // console.log(data)
        this.setState({ cartData: data })

    }
    
    removeCart(item) {
        console.log(item);
        //this.state.cartData.push(item);
        var array = [...this.state.cartData]; // make a separate copy of the array
        var index = array.indexOf(item)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ cartData: array });
        }

    }
    shortCart(){
        const shortedList = this.state.cartData.sort(function(a, b) {
            if(a.productName.toLowerCase() < b.productName.toLowerCase()) return -1;
            if(a.productName.toLowerCase() > b.productName.toLowerCase()) return 1;
            return 0;
           });
          this.setState({
            list: [...shortedList],
          });
    }

    render() {
        // console.log(this.state.cartData);
        return (
            <div>
                <h1>Product List</h1>
                <table>
                    {
                        ProductData.map((item, key) =>
                            <tbody key={item.id}>
                                <tr >
                                    <td>
                                        <label>{item.id}</label>
                                    </td>
                                    <td>
                                        {item.productName}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <button onClick={() => this.addToCartClick(item)} >
                                            Add TO Cart
      </button>
                                    </td>

                                </tr>
                            </tbody>
                        )
                    }
                </table>
                <div>
                    <h1>Cart Deatils</h1>
                    <div>
                        <div> <button className="sort-btn" onClick={() => this.shortCart()} >
                                                  Sort </button></div>
                        <table>
                            {
                                this.state.cartData.map((item, key) =>
                                    <tbody key={item.id}>
                                        <tr >
                                            <td>
                                                <label>{item.id}</label>
                                            </td>
                                            <td>
                                                {item.productName}
                                            </td>
                                            <td>
                                        {item.price}
                                    </td>
                                            <td>
                                                <button  className ="remove-cart"onClick={() => this.removeCart(item)} >
                                                   Remove Item Cart </button>
                                            </td>

                                        </tr>
                                    </tbody>
                                )
                            }
                        </table>
                        Total Item  : { this.state.cartData.length }
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductList;