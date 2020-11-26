const path=require("path")
const HTMLWebpackPlugiin=require("html-webpack-plugin")

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,"build"),
        filename:"bundle.js"
    },
    module:{
        rules:[
        {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
        },
        {
            test:/\.html$/,
            use:[
                {
                    loader:"html-loader"
                }
            ]
        },
        {
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf|png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
    ],
    },
    
    plugins:[
        new HTMLWebpackPlugiin({
            template:"./public/index.html",
            filename:"./index.html"
        })
    ],
    devtool:"cheap-module-eval-source-map",
    devServer:{
        contentBase:path.join(__dirname,"public")
    }

    
}