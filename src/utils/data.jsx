export const data = {
  base58: {
    hash: "22c17a06117b40516f9826804800003562e834c9",
    version: 5,
  },
  encoding: "base58",
  validateaddress: {
    isvalid: true,
    address: "34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv",
    scriptPubKey: "a91422c17a06117b40516f9826804800003562e834c987",
    isscript: true,
    iswitness: false,
  },
  electrumScripthash:
    "124dbe6cf2394aa0e566d9b1df021343b563c694283038940e42ac9b24a50fcc",
  txHistory: {
    txCount: 2,
    txids: [
      "5cf995061aeb00d36dd45b78514bdd4e091c299a0b1c10f030e4f56c200e3b1a",
      "8f907925d2ebe48765103e6845c06f1f2bb77c6adc1cc002865865eb5cfd5c1c",
    ],
    blockHeightsByTxid: {
      "5cf995061aeb00d36dd45b78514bdd4e091c299a0b1c10f030e4f56c200e3b1a": 481830,
      "8f907925d2ebe48765103e6845c06f1f2bb77c6adc1cc002865865eb5cfd5c1c": 481824,
    },
    balanceSat: 759000,
    request: {
      limit: 10,
      offset: 0,
      sort: "desc",
    },
  },
};


export const transactions = [
  {
    txid: "5cf995061aeb00d36dd45b78514bdd4e091c299a0b1c10f030e4f56c200e3b1a",
    hash: "9bc387290d6ac0c97f790bd8e26f1e3af3c24b034d4b0dcfa65a038250c24819",
    version: 1,
    size: 216,
    vsize: 134,
    vout: [
      {
        value: 0.00448,
        n: 0,
        scriptPubKey: {
          asm: "OP_HASH160 22c17a06117b40516f9826804800003562e834c9 OP_EQUAL",
          desc: "addr(34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv)#nf5n7etc",
          hex: "a91422c17a06117b40516f9826804800003562e834c987",
          address: "34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv",
          type: "scripthash"
        }
      }
    ],
    hex: "01000000000101307aaf59702e4ae3c911687f430b3e2111525fc02dae8e0bfab3688fab9ea8100000000017160014",
    blockhash: "000000000000000000168d1252b6df5a1d58085e3553522b88760dd79a614e4b",
    confirmations: 358342,
    time: 1503545691,
    blocktime: 1503545691,
    fee: {
      amount: 0.00052,
      unit: "BTC"
    },
    weight: 534,
    locktime: 0,
    vin: [
      {
        txid: "10a89eab8f68b3fa0b8eae2dc05f5211213e0b437f6811c9e34a2e7059af7a30",
        vout: 0,
        scriptSig: {
          asm: "00149445e8b825f1a17d5e091948545c90654096db68",
          hex: "1600149445e8b825f1a17d5e091948545c90654096db68",
          address: "3Apg2dYGt7QKv1qHoMTRioChMhPL9FLsce",
          type: "scripthash"
        },
        txinwitness: [
          "3045022100d6c5927e1020c678a5ee33268c754c7865fa1f9faf506592d508fde4061b89c302202a13073ecbdb83c3f",
          "021ec0613f21c4e81c4b300426e5e5d30fa651f41e9993223adbe74dbe603c74fb"
        ],
        sequence: 4294967295,
        value: 0.005
      }
    ]
  },
  {
    txid: "8f907925d2ebe48765103e6845c06f1f2bb77c6adc1cc002865865eb5cfd5c1c",
    hash: "6117d821f97e3bebab845a8d2378817db4345d8a24012e3dc8f15100a37d5ded",
    version: 1,
    size: 302,
    vsize: 220,
    weight: 878,
    locktime: 0,
    vin: [
      {
        txid: "38c8c6473f149aa698c9868f266102def0e370ddfd4c5adb5916417940963658",
        vout: 0,
        scriptSig: {
          asm: "00149445e8b825f1a17d5e091948545c90654096db68",
          hex: "1600149445e8b825f1a17d5e091948545c90654096db68",
          address: "3Apg2dYGt7QKv1qHoMTRioChMhPL9FLsce",
          type: "scripthash"
        },
        txinwitness: [
          "3045022100aaa281e0611ba0b5a2cd055f77e5594709d611ad1233e7096394f64ffe16f5b202207e2dcc9ef3a54c244",
          "021ec0613f21c4e81c4b300426e5e5d30fa651f41e9993223adbe74dbe603c74fb"
        ],
        sequence: 4294967295,
        value: 0.005
      }
    ],
    vout: [
      {
        value: 0.00311,
        n: 0,
        scriptPubKey: {
          asm: "OP_HASH160 22c17a06117b40516f9826804800003562e834c9 OP_EQUAL",
          desc: "addr(34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv)#nf5n7etc",
          hex: "a91422c17a06117b40516f9826804800003562e834c987",
          address: "34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv",
          type: "scripthash"
        }
      },
      {
        value: 0,
        n: 1,
        scriptPubKey: {
          asm: "OP_RETURN 424950313431205c6f2f2048656c6c6f20536567576974203a2d29206b65657020697420737472",
          desc: "raw(6a4b424950313431205c6f2f2048656c6c6f20536567576974203a2d29206b656570206974207374726",
          hex: "6a4b424950313431205c6f2f2048656c6c6f20536567576974203a2d29206b656570206974207374726f6e67",
          type: "nulldata"
        }
      }
    ],
    hex: "010000000001015836964079411659db5a4cfddd70e3f0de0261268f86c998a69a143f47c6c8380000000017160014",
    blockhash: "0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893",
    confirmations: 358364,
    time: 1503539857,
    blocktime: 1503539857,
    fee: {
      amount: 0.00189,
      unit: "BTC"
    },
    fun: {
      type: "tx",
      date: "2017-08-24",
      chain: "main",
      txid: "8f907925d2ebe48765103e6845c06f1f2bb77c6adc1cc002865865eb5cfd5c1c",
      blockHeight: 481824,
      summary: "First SegWit transaction",
      referenceUrl: "https://twitter.com/KHS9NE/status/900553902923362304"
    }
  }
];
