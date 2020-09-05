const productRouter = require("express").Router();
const Product = require("../models/product.model");


productRouter.route("/").get((req,res) => {
   Product.find()
        .then(product => res.json(product))
        .catch(err => res.status(400).json("Error: Product GET " + err));
});

productRouter.route("/add").post((req, res) => {
    const newShop = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        product_image: req.body.product_image
    });

    newShop.save()
    .then(()=> res.status(201).json({
        message: 'Item Added"'
    }))
})


productRouter.route("/:_id").get((req, res) => {
   Product.findById(req.params._id)
        .select('name product_image price description')
        .exec()
        .then(singleProduct => res.json(singleProduct))
        .catch(err => res.status(404).json("Error: " + err))
})

productRouter.route("/:_id").delete((req, res) => {
   Product.deleteOne({ _id: req.params.id})
        .exec()
        .then(singleItem => {
            res.status(200).json({
                message: "User Deleted"
            });
        })
        .catch( err => {
            console.log("Error:" + err);
            res.status(404).json({
                message: "Item not found"
            });
        });
})

module.exports = productRouter;