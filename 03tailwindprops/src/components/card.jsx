import React from 'react'

const Card = ({name = "PF" , person}) => {
    return (
        <div>
            <div class="flex flex-col items-center p-7 rounded-2xl">
                <div>
                    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.freecreatives.com/wp-content/uploads/2016/04/Pink-Floyd-HD-Wallpaper.jpg" />
                </div>
                <div class="flex">
                    <span class="text-2xl font-medium">{name}</span>
                    <span class="font-medium text-sky-500">{person}</span>
                    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                        <span>No. 4</span>
                        <span>·</span>
                        <span>2025</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
