(()=>{"use strict";class t{constructor(t,s){this.name=t,this.length=s,this.sunk=!1,this.damage={hit:0,position:[]}}hitShip(t){this.damage.hit++,this.damage.position.push(t)}isSunk(){this.length==this.damage.hit&&(this.sunk=!0)}}class s{constructor(){this.board,this.missedShots=[],this.shotsMade=[],this.createBoard()}createBoard(){return this.board=[...Array(10)].map((()=>Array(10).fill(0)))}placeShip(t,s,e,i){if(!this.possiblePlacement(t,s,e,i))return!1;if(i)for(let i=0;i<t.length;i++)this.board[s+i][e]=t;else if(!i)for(let i=0;i<t.length;i++)this.board[s][e+i]=t;return!0}possiblePlacement(t,s,e,i){if(i){for(let i=0;i<t.length;i++)try{for(;0!==this.board[s+i][e];)return!1}catch(t){return!1}return!0}if(!i){for(let i=0;i<t.length;i++)try{for(;0!==this.board[s][e+i];)return!1}catch(t){return!1}return!0}}receiveAttack(t,s){const e=[t,s];return 0==this.alreadyShot(e)&&(0!==this.board[t][s]?(this.board[t][s].hitShip(e),this.board[t][s].isSunk(),this.shotsMade.push(e)):(this.missedShots.push(e),this.shotsMade.push(e)),!0)}alreadyShot(t){return this.shotsMade.some((s=>t.every(((t,e)=>t===s[e]))))}checkAllShipsSunk(){const t=this.isBoatSunk("carrier"),s=this.isBoatSunk("battleship"),e=this.isBoatSunk("cruiser"),i=this.isBoatSunk("submarine"),r=this.isBoatSunk("destroyer");return!!(t&&s&&e&&i&&!0===r)}isBoatSunk(t){const s=this.board;for(let e=0;e<s.length;e++){const i=s[e].findIndex((s=>s.name===t));if(-1!==i)return!0===s[i].find((s=>s.name===t)).sunk}}}(()=>{const e=new t("destroyer",3),i=new t("boat",2),r=new s;r.placeShip(e,0,0,!0),r.placeShip(i,5,5,!1),r.isBoatSunk("boat"),r.isBoatSunk("destroyer"),console.log(r.possiblePlacement(e,2,2,!0)),console.log(r.possiblePlacement(e,9,9,!1)),console.log(r)})()})();