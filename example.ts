import { pumpFunBuy, pumpFunSell} from './src/swap';
import { TransactionMode } from './src/types'

class Example {
    private payerPrivateKey: string;
    private mintAddress: string;
    private transactionMode: TransactionMode;

    constructor(privateKey: string, mintAddress: string, mode: TransactionMode) {
        this.payerPrivateKey = privateKey;
        this.mintAddress = mintAddress;
        this.transactionMode = mode;
    }

    async main() {
        const solIn = 0.005; // Example value, adjust as needed
        const slippageDecimal = 0.25; // Example value, adjust as needed
        const tokenBalance = 1000; // Example value, adjust as needed

        try {
            // Call the buy function
            await pumpFunBuy(this.transactionMode, this.payerPrivateKey, this.mintAddress, solIn, slippageDecimal);

            // Call the sell function
            // await pumpFunSell(this.transactionMode, this.payerPrivateKey, this.mintAddress, tokenBalance, slippageDecimal);
        } catch (error) {
            console.error('Error in main function:', error);
        }
    }
}

// Usage
const privateKey = ''; // Replace with your actual private key
const mintAddress = '9kEsyCdaP9oJsXg9kAbZD4ajMYxhhdx1KSfBpHktiF84'; //Replace with actual token mint address
const txMode = TransactionMode.Execution; //Set to simulate to test, Execution to perform

const example = new Example(privateKey,mintAddress, txMode);
example.main();
