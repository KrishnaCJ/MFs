const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
    allowedHosts: ["localhost", ".gitpod.io"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products:
          "products@https://8081-krishnacj-mfs-rtfzun0lg6f.ws-us104.gitpod.io/remoteEntry.js",
        cart: "cart@https://8082-krishnacj-mfs-rtfzun0lg6f.ws-us104.gitpod.io/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
