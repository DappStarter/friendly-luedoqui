require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember modify grace casino sword tube'; 
let testAccounts = [
"0xc6c4d88d028c7ab9e969612a25fe72f26e8417cd90df76c0f3865ddce3b00b81",
"0x39c9c7f90b4c29be8f0f792d720b0f3d0b6e8882a49d59b6fd1bd4b7bf4de17c",
"0x83ffbb8db40b6d4433fe8a1af1c34200e499b4351f3aeccc9048cc89d289bf74",
"0xe503884ef54f82639caa0a8fec8d8e7b3ec269c103bc38497c1184393243ec28",
"0x8aa649aa1e49567b39d48d32fddc991ef368a0ab789d155c102ef8fd04aa8ff5",
"0x64fa59dc5345ea43d1894887e7eb9699cc0b6181ecb869063f576a8999dcb9da",
"0xccecac2794a7b8ab1912803304792345922823507964c6bb56bfee14be9b9a2d",
"0xc6fdd5bd133b7cfb2b7ed7e35f8b55fc6133d1782c508a83125fb7c727b4dc78",
"0x1d2fdcaf10f7d88b6620ec5b497dedc1dc26b2027815d74923813d3b8c5d851c",
"0x1db3df35db9176ae0eb2e8111d1d9a31c34556fc6909b7eaa31ff1f5356570f1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
