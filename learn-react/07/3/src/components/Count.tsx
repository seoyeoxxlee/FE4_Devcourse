import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

export default function Count () {
    console.log("Count Component!");
    return (
        <>
        <CountDisplay/>
        <CountButton/>
        </>
    );
}