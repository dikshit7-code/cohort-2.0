import React from 'react'

const Cards = () => {
  return (
    <div className='card-section'>
        <div className="card" id='card1'>
          <i class="ri-home-office-fill"></i>
          <p>Professional hard courts <span> with tournament-grade lighting & climate control </span> — play in perfect conditions in any season.</p>
          <button>Game mode</button>
        </div>
        <div className='card' id='card2'>
          <button>Private & Group lessons</button>
        </div>
        <div className='card' id='card3'>
        <div class="header">
            <div class="title">100+</div>
            <div class="subtitle">Pro Coaches</div>
            <div class="description">
                Certified professionals ready to boost your game from first serve to tournament level.
            </div>
        </div>

        <div class="levels">
            <div class="level-row">
                <div class="level-name">Beginner</div>
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <div class="level-count">55</div>
            </div>

            <div class="level-row">
                <div class="level-name">Intermediate</div>
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <div class="level-count">40</div>
            </div>

            <div class="level-row">
                <div class="level-name">Advanced</div>
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <div class="level-count">35</div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Cards