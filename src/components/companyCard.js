import { useParams } from "react-router-dom"

export default function CompanyCard(props){
    return(
        <div class="p-4 md:w-1/4">
        <div class="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden h-full shadow-md">
        <img class="lg:h-48 md:h-36 w-full object-contain object-center h-1/3" src={props.imageLink} alt="blog" />
        <div class="p-4 h-2/3 flex-col justify-between relative">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-2">{props.comanyName}</h1>
            <p class="text-justify leading-relaxed mb-1 text-[16px]">{props.content&&props.content.substring(0,100)+(props.content.length>100?`...`:'.')}</p>
            <div class="flex items-center flex-wrap">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 " href={`${props.redirectLink}/${props.comp_id}`}>Read More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
            </div>
        </div>
        </div>
    </div>

    )
}
