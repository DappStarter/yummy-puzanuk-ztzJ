require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture strike deny trumpet column install flower army gather'; 
let testAccounts = [
"0xa691c7f998ba4dc5729f561f017bc51f4c2afffffaebea33fec1d1f14047ef86",
"0x7be8030f954ea1ce179e3cf4e2d353fed0388bb21cc680249415bfd84200305c",
"0x425e04a71f0903e86e942d238df64ab32c215b3e918682056e8c6a87de227a05",
"0xe09d0c715b23b90e820867e8d7dbd48cc6987828aed31b5c76333825879acb70",
"0x1a71b98af0e209cf6d6e37a596b34c306dac571a725b84657ed84f674ee97d28",
"0xcee2791340e64b9c868cb6315b630971ed703fa08e91b4658d19f91cc11954f1",
"0x9184e3e7290497e47de9950626f85b8fd0c4455ee99ec5fcc7bf16f76435cbf7",
"0x6687e2ec52a6f1fb1903c3ce2970be2f4708e972aaa28487a6a56ec700b06685",
"0x74710770c09a8821bdca8b3d4b51c624f3271299889941b17a46b44169a49e63",
"0x7417e8150b918ed5e9affb3fe3ddfd06a559d99dc44ab1d44449a67a32ef471d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


