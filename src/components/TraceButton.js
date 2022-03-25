const TraceButton = () => {
    const traceButton = () => {
        alert("Lagu berhasil dipilih.....")
        console.log("Hallo Guys..... Hihihihi");
    }
    
    return(
        <button onClick={() => traceButton()}>Select</button>
    );
}

export default TraceButton;