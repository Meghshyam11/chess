import { WebSocket } from "ws";
import { Chess } from "chess.js";
export class Game{
    public player1:WebSocket;
    public player2:WebSocket;
    public board:Chess;
    private startTime: Date;
    constructor(player1:WebSocket,player2:WebSocket){
        this.player1=player1;
        this.player2=player2;
        this.board=new Chess();
       
        this.startTime=new Date();
}
 makeMove(socket:WebSocket, startPosition: {
    from: string;
    to: string;
 }){

    //validate move
    //is it this users move
    //is it valid move
    this.board.move({
        
    })

    //update board
    //push move
    //check if game over
    //send dupdated board to both players
 }

}