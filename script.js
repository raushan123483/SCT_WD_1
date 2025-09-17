window.addEventListener('hashchange',()=>{
                let id=location.hash.substring(1)
                if(id==='about'){
                    document.body.style.backgroundColor="#e00b2bff"
                }
                else if(id==='services'){
                    document.body.style.backgroundColor="#0ccd0cff"
                }
                else if(id==="contact"){
                    document.body.style.backgroundColor="#e7dd25ff"
                }
                else{
                    document.body.style.backgroundColor="#fedc97"
                }
            })

            document.addEventListener("DOMContentLoaded",()=>{
                let sections=document.querySelectorAll(".content-section")

                let sectionColors={
                    home:"#edecf1ff",
                    about:"#ee1431ff",
                    services:"#7dcd14ff",
                    contact:"#3028c6ff"
                }

                function onScroll(){
                    let currentSection=document.getElementById("home")
                    sections.forEach(section=>{
                        let rect=section.getBoundingClientRect()
                        if(rect.top<=window.innerHeight/2 && rect.bottom>=window.innerHeight/2){
                            currentSection=section
                        }
                    })

                    if(currentSection){
                        let id=currentSection.id
                        document.body.style.backgroundColor=sectionColors[id] || ""
                    }
                }

                window.addEventListener("scroll", onScroll)
                onScroll()
            })