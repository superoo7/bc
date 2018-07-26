interface BlockData {
    timestamp: number
    lastHash: string
    hash: string
    data: {
        from: string
        to: string
        amount: number
    }
    nonce: number
    toString(): string
}
