// Copyright (c) 2024 The Bitcoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

import * as ffi from './ffi/ecash_lib_wasm_nodejs.js';
import { __setEcc } from './ecc.js';
import { __setHashes } from './hash.js';
import { __setPkc } from './publicKeyCrypto.js';

__setEcc(new ffi.Ecc());
__setHashes({
    sha256: ffi.sha256,
    sha256d: ffi.sha256d,
    shaRmd160: ffi.shaRmd160,
    sha512: ffi.sha512,
    Sha256H: ffi.Sha256H,
    Sha512H: ffi.Sha512H,
});
__setPkc({
    algoSupported: ffi.publicKeyCryptoAlgoSupported,
    verify: ffi.publicKeyCryptoVerify,
});
