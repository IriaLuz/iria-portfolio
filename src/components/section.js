import React from 'react';
import Block from '../components/block'

function Section({sectionData}) {
 
    return (
        <div>
            <h2>{sectionData.title}</h2>
            <h3 className="mb-md-5 pb-md-5 mb-3 pb3">{sectionData.subtitle}</h3>
            {sectionData.content.map((blockContent,index)=> {
            
            const isImageLeft = index % 2 !== 0;
            return <Block blockData= {blockContent} isImageLeft={isImageLeft}/> 
            
            })}

            
        </div>
    );
}

export default Section;