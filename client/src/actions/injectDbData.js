import User from '../components/User';



export function fetchData(res){


    if(window.location.href === "http://localhost:3000/chat"){
        
        let json = res;

                           
        let chatTab = document.getElementById('chat-tab');
        let chatSection = document.querySelector('section.chat');      
                  
        chatTab.innerHTML = "";
        
        json.forEach(e=>{            
            
            if(User.getUser() === e.author){              

            

                chatTab.insertAdjacentHTML('beforeend', `
                <div class="d-flex justify-content-end msg-box">
                    <div class="chat-my-message d-flex flex-row msg">
                        <div>
                            <span>${e.author}</span>
                            <p>${e.message}</p>
                            <small>${e.datetime}</small>
                        </div>
                    </div>
                </div>
                `);
            }else{
                chatTab.insertAdjacentHTML('beforeend', `
                <div class="d-flex justify-content-start msg-box">
                    <div class="chat-message d-flex flex-row msg">
                        <div>
                            <span>${e.author}</span>
                            <p>${e.message}</p>
                            <small>${e.datetime}</small>
                        </div>
                    </div>
                </div>
                `);
            }

            });

            let lastBox = document.querySelector('.msg-box:last-child');
            let sectionPos;

            if(lastBox === null){ 
                sectionPos = 0;
            }else{
                sectionPos = chatSection.getBoundingClientRect().bottom;
            }


            let chatTabPos = chatTab.getBoundingClientRect().bottom;

            let diffStatic = chatTabPos - sectionPos;

            getScrollStatus(lastBox, chatTabPos, sectionPos, diffStatic).then(res=>{
    
                if(res){
                    let lastBox = chatTab.querySelector('.msg-box:last-child');
                    lastBox.scrollIntoView(true);
                }
    
            });

            async function getScrollStatus(lastBoxEl, chatTabPos, sectionPos, diffStatic){

                let scrollToBottom;
    
                let diffLiveTime = chatTabPos - sectionPos;
                console.log(diffStatic);
    
                if(lastBoxEl){
                    if(diffLiveTime === diffStatic){
                        scrollToBottom = true
                    }else{
                        scrollToBottom = false
                    }
                
                }else{
                    scrollToBottom = true
                }
                await scrollToBottom;
                return scrollToBottom;
    
            }
    }
}