
setTimeout(showDefault,100);

function showDefault(){
    showIcon(1)
}
function showIcon(page){

    const icon = document.getElementById('icon');
    if (page.value>1) {
        let index = 100*(page.value-1)
        console.log(index)
        while (index < page.value*100-1) {
            let divIcon = 
                `<div id="icon-2" class="p-1 w-full rounded-sm  shadow-sm shadow-cyan-500 relative icon hover:shadow-blue-500 hover:shadow-md">
                    <div class=" bg-red-50 top-0 left-0 bottom-0  p-1 z-[-1]">
                        <img src="images/128px/${index}.png" alt="" >
                     </div>
                    <div class="absolute justify-between z-20 download">
                        <div class="bg-violet-200 rounded-md hover:bg-violet-400">
                            <a href="images/32px/${index}.png" class="z-40" download="">
                                <i style="font-size:20px" class="fa">32px</i>
                            </a>
                        </div>
                        <div class="bg-yellow-200 rounded-md hover:bg-yellow-400">
                            <h3>
                                <a href="images/64px/${index}.png" class="z-40" download="">
                                    <i style="font-size:20px" class="fa">64px</i>
                                </a>
                            </h3>
                        </div>
                        <div class="bg-green-200 hover:bg-green-400">
                            <a href="images/128px/1.png" class="z-40" download="">
                                <i style="font-size:24px" class="fa">&#xf019;</i>
                            </a>
                            
                        </div>
        
                    </div>
                </div>`
            index++
            icon.innerHTML += divIcon
        }
    }
    else{
        for (let index = 1; index < page*100-1; index++) {
            let divIcon = 
                `<div id="icon-2" class="p-1 w-full rounded-sm  shadow-sm shadow-cyan-500 relative icon hover:shadow-blue-500 hover:shadow-md">
                    <div class=" bg-red-50 top-0 left-0 bottom-0  p-1 z-[-1]">
                        <img src="images/128px/${index}.png" alt="" >
                     </div>
                    <div class="absolute justify-between z-20 download">
                        <div class="bg-violet-200 rounded-md hover:bg-violet-400">
                            <a href="images/32px/${index}.png" class="z-40" download="">
                                <i style="font-size:20px" class="fa">32px</i>
                            </a>
                        </div>
                        <div class="bg-yellow-200 rounded-md hover:bg-yellow-400">
                            <h3>
                                <a href="images/64px/${index}.png" class="z-40" download="">
                                    <i style="font-size:20px" class="fa">64px</i>
                                </a>
                            </h3>
                        </div>
                        <div class="bg-green-200 hover:bg-green-400">
                            <a href="images/128px/1.png" class="z-40" download="">
                                <i style="font-size:24px" class="fa">&#xf019;</i>
                            </a>
                            
                        </div>
        
                    </div>
                </div>`
            icon.innerHTML += divIcon
        }
        document.getElementById('page-1').setAttribute('disabled',true)
        let classRemove = document.getElementById('page-1').classList;
        classRemove.remove('bg-fuchsia-300','hover:bg-fuchsia-400','hover:border-indigo-600','hover:bg-green')
        classRemove.add('bg-red-500')
    }
}