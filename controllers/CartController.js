const { Product, User, Cart } = require("../models");

class CartController {
  static async allCart(req, res, next) {
    try {
      const foundAllCart = await Cart.findAll({
        where: {
          UserId: +req.loggedIn.id
        },
        include: [{
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
        { model: Product},
      ],
        order: [["id", "ASC"]],
        attributes: ['id', 'quantity', 'status']
      });
      res.status(200).json({ foundAllCart });
    } catch (err) {
      next(err);
    }
  }

  static async addCart(req, res, next) {
    const { ProductId } = req.body;
    const UserId = +req.loggedIn.id;
    try {
      const foundCart = await Cart.findOne({
        where: {
          UserId: UserId,
          ProductId: ProductId
        }
      })
      
      const foundProduct = await Product.findOne({
        where: {
          id: +ProductId
        }
      })
      
      if(!foundCart && foundProduct.stock > 0) {
        await Cart.create({
          UserId: UserId,
          ProductId: +ProductId,
          quantity: 1
        });
        res.status(201).json({ msg: "Item is successfully added to cart" });
      }
      
      else if(foundCart && foundProduct.stock > 0) {
        await foundCart.increment('quantity')
        res.status(200).json({ msg: "Quantity in cart is updated" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateCart(req, res, next) {
    const cartId = +req.params.id;
    const { marking } = req.body
    
    try {
      const foundCart = await Cart.findOne({
        where: {
          id: cartId
        }
      })
      const foundProduct = await Product.findOne({
        where: {
          id: foundCart.ProductId
        }
      })

      if(foundCart.quantity > 1 && foundCart.quantity <= foundProduct.stock && marking === 'min' ) {
        let newQuantity = foundCart.quantity - 1
        console.log(newQuantity);
        await Cart.update({
          quantity: newQuantity},
          { 
            where: {
            id: cartId
          }
        }
        )
        res.status(200).json({ msg: "Cart quantity is updated!" }); 
      }
      else if(foundCart.quantity >= 1 && foundCart.quantity < foundProduct.stock && marking === 'plus' ) {
        let newQuantity = foundCart.quantity + 1
        console.log(newQuantity);
        await Cart.update(
          { quantity: newQuantity },
          {
            where: {
              id: cartId,
            },
          }
        )
        res.status(200).json({ msg: "Cart quantity is updated!" }); 
      }
      else if(foundCart.quantity === 1 && marking === 'min') {
        await foundCart.destroy()
        res.status(200).json({ msg: "Cart item is deleted" });
      }
      else if(foundCart.quantity === foundProduct.stock && marking === 'plus') {
        throw { msg: "The quantity you asked for is beyond the stock limit", status: 400 };
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteCart(req, res, next) {
    const cartId = +req.params.id;

    try {
      console.log("masuk");
      await Cart.destroy({ where: { id: cartId } });
      res.status(200).json({ msg: "Cart item is successfully deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CartController;
