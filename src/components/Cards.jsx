import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './cards.css';

function Cards() {
    const [selectedMember, setSelectedMember] = useState(null);

    const shcMembers = [
        { name: 'Monkey D. Luffy', image: 'luffy.jpg', position: 'Captain', bio: 'Luffy is the captain of the Straw Hat Pirates. His goal is to find the One Piece and become the Pirate King.', additionalImages: ['luffy1.jpg', 'luffy2.jpg'] },
        { name: 'Roronoa Zoro', image: 'zoro.jpeg', position: 'Swordsman', bio: 'Zoro is the swordsman of the Straw Hat Pirates. He dreams of becoming the world\'s greatest swordsman.', additionalImages: ['zoro1.jpg', 'zoro2.jpg'] },
        { name: 'Nami', image: 'nami.jpg', position: 'Navigator', bio: 'Nami is the navigator of the Straw Hat Pirates. She dreams of drawing a map of the entire world.', additionalImages: ['nami12.jpg', 'nami1.jpg'] },
        { name: 'Usopp', image: 'usopp.png', position: 'Sniper', bio: 'Usopp is the sniper of the Straw Hat Pirates. He is known for his lies and dreams of becoming a brave warrior of the sea.', additionalImages: ['usopp1.jpg', 'usopp2.jpg'] },
        { name: 'Sanji', image: 'sanji.jpg', position: 'Cook', bio: 'Sanji is the cook of the Straw Hat Pirates. He dreams of finding the All Blue, a legendary sea.', additionalImages: ['sanji1.jpg', 'sanji2.jpg'] },
        { name: 'Tony Tony Chopper', image: 'chopper.jpg', position: 'Doctor', bio: 'Chopper is the doctor of the Straw Hat Pirates. He is a reindeer who ate the Human-Human Fruit.', additionalImages: ['chopper1.jpg', 'chopper2.jpg'] },
        { name: 'Nico Robin', image: 'nico.jpeg', position: 'Archaeologist', bio: 'Robin is the archaeologist of the Straw Hat Pirates. She seeks to uncover the true history of the world.', additionalImages: ['robin1.jpg', 'robin2.jpg'] },
        { name: 'Franky', image: 'franky.jpg', position: 'Shipwright', bio: 'Franky is the shipwright of the Straw Hat Pirates. He built the Thousand Sunny, the crew\'s ship.', additionalImages: ['franky1.jpg', 'franky2.jpg'] },
        { name: 'Brook', image: 'brook.jpg', position: 'Musician', bio: 'Brook is the musician of the Straw Hat Pirates. He is a living skeleton who dreams of reuniting with Laboon.', additionalImages: ['brook1.jpg', 'brook2.png'] },
        { name: 'Jinbe', image: 'jinbei.jpg', position: 'Helmsman', bio: 'Jinbe is the helmsman of the Straw Hat Pirates. He is a fish-man and a former Warlord of the Sea.', additionalImages: ['jimbe1.jpg', 'jimbe2.jpg'] }
    ];

    const handleClick = (member) => {
        setSelectedMember(member);
    };

    return (
        <>
            <div className="container">
                <h2>Strawhat Crew</h2>
                <div className="cards">
                    {shcMembers.map((member, index) => (
                        <div className="card" key={index} onClick={() => handleClick(member)}>
                            <img src={`./public/shc/${member.image}`} alt={member.name} />
                            <div className="card-details">
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedMember && (
                    <div className="member-details">
                        <h2>{selectedMember.name}</h2>
                        <p>{selectedMember.bio}</p>
                        <div className="additional-images">
                            {selectedMember.additionalImages.map((image, idx) => (
                                <img key={idx} src={`./public/shc/${image}`} alt={selectedMember.name} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cards;
