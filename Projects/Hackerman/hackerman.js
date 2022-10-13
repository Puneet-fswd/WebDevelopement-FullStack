prompt("Please enter your name to start the game");
async function hackerman()
{
    let attack1 = new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            resolve("Puneet.a_15");
        }, 3000)
    })
    let attack2 = new Promise((resolve, reject)=> 
    {
        setTimeout(()=> 
        {
            resolve("punyashlok123$");
        }, 7000)
    })
    
    //initial comments not changing
    document.getElementById('action').innerHTML = "....Attack Initiated....";
    document.getElementById("info_gathered").innerHTML += "Attack Instagram Initiated...<br>"
    setTimeout(()=>
    {
        document.getElementById("action").innerHTML = "Fetching User Name <br> Please Wait....."
        document.getElementById("info_gathered").innerHTML += "Fetching User Name Using Name Entered....<br>"
    }, 1000)

    //username
    let attack1_Result = await attack1;
    setTimeout(()=> 
    {
        document.getElementById("info_gathered").innerHTML += "Fetched Username : " + attack1_Result + "<br>"
        document.getElementById("action").innerHTML = "....Fetching Password...."
        document.getElementById("info_gathered").innerHTML += "Fetching Password....<br>"
    }, 1000)

    //cracking password
    let attack2_Result = await attack2;
    document.getElementById("info_gathered").innerHTML += "Encrypted Password : ------<br>"
    document.getElementById("action").innerHTML = "!!!Found Encrypted Password!!!"
    document.getElementById("action").innerHTML = "Decrypting Password Please Wait....."
    document.getElementById("info_gathered").innerHTML += "<br>Decrypting Password....<br>"

    //hacking result
    setTimeout(()=>
    {
        document.getElementById("info_gathered").innerHTML += "Decrypted Password : " + attack2_Result + "<br>"
        document.getElementById("action").innerHTML = "!!!Password Decrypted!!!"
        document.getElementById("info_gathered").innerHTML += "******SYSTEM BREACH SUCCESSFUL******<br>"
    }, 4000)
}
const main1 = async ()=> 
{
    let a = await hackerman();
}
main1();