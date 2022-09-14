// document.addEventListener("DOMContentLoaded", () => {

setTimeout(() => {
        document.getElementById("loader").innerHTML = `<span class="loadIcon material-icons-outlined" style="font-size: 64px;" onclick="hideLoader()"> token </span>
        <div class="loaderText"> Done! </div>`;
    }, 1700)
    // })

function hideLoader() {
    document.getElementById("loader").classList.remove("active");
    setTimeout(() => {
        document.getElementById("loader").classList.add("none");
    }, 500)
    console.log("Loader removed.")
    console.warn(`"Proceed with caution, there's danger here": Site may be unstable!`);
    console.log("Eh, I'll fix it later.");
    console.error("Decode has left the chat. ")
}