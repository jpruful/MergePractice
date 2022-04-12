let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;

const gridLength = 200;

$(function(){
    mapArray = [
        [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [3, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 3, 0, 1, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 3],
        [1, 1, 0, 1, 3, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 3, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
        [0, 0, 3, 1, 1, 0, 3, 1, 0, 1, 1, 3, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "simple_rpg/images/spriteSheet.png";
    currentImgMain = {
        "x":0,
        "y":0
    };

    imgMain.onload = function(){
        ctx.drawImage(imgMain, 0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    }
    imgMountain = new Image();
    imgMountain.src = "simple_rpg/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "simple_rpg/images/Enemy.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(var x in mapArray){
                for(var y in mapArray[x]){
                    if(mapArray[x][y]==1){
                        ctx.drawImage(imgMountain, 32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                    }else if(mapArray[x][y]==3){
                        ctx.drawImage(imgEnemy, 7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                    }else if(mapArray[x][y]==4){
                        ctx.drawImage(imgEnemy, 7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                    }
                }
            }
        }
    }
});

document.body.addEventListener("keydown",function(event){
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = {
        "x":-1,
        "y":-1
    };
    targetBlock = {
        "x":-1,
        "y":-1
    };

    event.preventDefault();

    switch(event.code){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }

    if(targetImg.x<=3000 && targetImg.x>=0 && targetImg.y<=3000 && targetImg.y>=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }

    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

    if(targetBlock.x!=-1 && targetBlock.y!=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0:
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1:
                $("#talkBox").text("有山");
                break;
            case 2:
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3:
                $("#talkBox").text("哈喽");
                break;
            case 4:
                $("#talkBox").text("掰掰");
                break;
            case 5:
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                $("#talkBox").text("起點");
                break;
        }
    }else{
        $("#talkBox").text("邊界");
    }

    ctx.drawImage(imgMain, cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
});