class food 
{

     constructor()
    {
      this.foodStock=0; 
      this.lastFed;
      this.image = loadImage("Milk.png");
    }

     updateFoodStock()
    {
       this.foodStock=foodStock;
    }

     getFedTime(lastFed)
    {
        this.lastFed=lastFed;
    }

     deductFood()
    {
        if(foodStock>0)
        {
            this.foodStock;
            
        }
    }


    getFoodStock()
    {
        return this.foodStock;
    }

    display()
    {
       
    fill(255,255,254);
    textSize(15);
    lastfeed =hour() ,      
    if(lastFed>=12)
    {
        text("Last Feed :"+ lastFed%12 + "PM",350,30);
    }else if(lastFed==0)
    {
        text("Last Feed : 12 AM",350,30);
    }else
    {
        text("Last Feed :"+lastFed + "AM", 350, 30);
    }

        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,900,320,70,70);

        if (this.foodStock!=0) 
        {
            for(var i=0;i<this.foodStock;i++)
            {
                if(i%10==0)
                {
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }   
}  
