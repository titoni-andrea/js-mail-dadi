let mailList = ["mail1@mail.it", "mail2@mail.it", "mail3@mail.it", "mail4@mail.it", "mail5@mail.it",]

let mailUser = prompt("Scrivi la tua mail per accedere")

for (i = 0; i < mailList.length; i++) {
    if (mailList[i] == mailUser) {
        console.log("Puoi accedere")
    }
}