 document.addEventListener("DOMContentLoaded", () => {
     document.getElementById("startup").classList.add("active");
     document.getElementById("startupVideo").load()
     document.getElementById("startupVideo").play()
 })

 let waitForStartup = setTimeout(() => {
     document.getElementById("startup").classList.remove("active")
     console.log(`its done man`)
     let mainAudio = document.getElementById("mainAudio")
     mainAudio.volume = 0.5;
     mainAudio.play()
 }, 18000)