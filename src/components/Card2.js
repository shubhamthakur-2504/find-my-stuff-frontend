import React from 'react'
import './styles/card2.css'
export default function Card2({image,deletePost}) {
    return (
        
        <div>
            
            <div class="profile-body" style={{padding:'10px'}}>
                <div class="profile-actions" style={{padding:'10px'}}>
                    <section class="bio">
                        <div class="bio-text" >
                            <img src={image} alt='Postimage' style={{height:'110px', width:'110px' }}></img>

                        </div>
                        <button class="bio-header" onClick={deletePost} style={{cursor:"pointer"}}>DELETE</button>

                    </section>
                </div>
            </div>
        </div>
    )
}
