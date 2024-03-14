(function(){
    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    // default folder id = 0
    let fid = 0;
    btnAddFolder.addEventListener("click", function(){
        let  fname = prompt("Folder name?");
        if(fname == null){
            return;
        }

        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        divName.innerHTML = fname;

        // har clone ki id daalnge jisse uniqueness ka pehchan chale
        // setattribute() se uniqueness ka pehchan hogi
        // jb v ek folder bnega to fid ko +1 kr denge
        // important for both delete and edit - delete krnge to puchega kn se wale ko delete krna h

        //attribute humari marji ki information hoti h jo hm daalte h aur uske basis pe actions lete h
        divFolder.setAttribute("fid", ++fid);

        let spanDelete = divFolder.querySelector("span[action='delete']");
        spanDelete.addEventListener("click", function(){
            let flag = confirm("Do you want to delete the folder " + divName.innerHTML);
            if(flag == true){
            divContainer.removeChild(divFolder);
            }
        });
        divContainer.appendChild(divFolder);


        // edit and delete functionality likhnge
        // delete pe click krne pe alert box aaega (a) Ok (b) cancel
        // validation lagaenge ki 2 folder same naam k ni hone chaiye

    })
})();