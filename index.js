const icon = document.getElementById('icon')
for (let index = 0; index < 10; index++) {
    let divIcon = 
        `<div id="icon-2" class="p-1 rounded-sm  shadow-sm shadow-cyan-500 relative icon hover:shadow-blue-500 hover:shadow-md">
            <div class="bg-red-50 top-0 left-0 bottom-0 absolute p-2 z-[-1]">
                <img src="images/128px/${index}.png" alt="" >
             </div>
            <div class="justify-between z-20 download">
                <div class="bg-violet-200 rounded-md hover:bg-violet-400">
                    <a href="images/128px/.png" class="z-40" download="">
                        <i style="font-size:20px" class="fa">16px</i>
                    </a>
                </div>
                <div class="bg-yellow-200 rounded-md hover:bg-yellow-400">
                    <h3>
                        <a href="images/128px/1.png" class="z-40" download="">
                            <i style="font-size:20px" class="fa">32px</i>
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
    console.log(divIcon)
    icon.innerHTML += divIcon
}