class Block implements BlockData {
    constructor(
        public timestamp: number,
        public lastHash: string,
        public hash: string,
        public data: {
            from: string
            to: string
            amount: number
        },
        public nonce: number
    ) {}

    toString(): string {
        return `Block -
    Timestamp : ${this.timestamp}
    Last Hash : ${this.lastHash.substring(0, 10)}
    Hash      : ${this.hash.substring(0, 10)}
    Nonce     : ${this.nonce}
    Data      : ${this.data}`
    }
}
