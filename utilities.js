//Triangulation matrics
export const TRIANGULATION =[

];
//draw tringle
const drawPath = (ctx, points, closePath) => {
    const region = new Path2D();
    region.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      const point = points[i];
      region.lineTo(point[0], point[1]);
    }
  
    if (closePath) {
      region.closePath();
    }
    ctx.strokeStyle = "grey";
    ctx.stroke(region);
  };
  
//draw the points

export const drawMesh = (predictions , ctx) =>{
    if(predictions.length>0){
        // draw points
        predictions.forEach(prediction=> {
            const keypoints=prediction.scaledMesh;
                // draw triangles
          //  Draw Triangles
      for (let i = 0; i < TRIANGULATION.length / 3; i++) {
        // Get sets of three keypoints for the triangle
        const points = [
          TRIANGULATION[i * 3],
          TRIANGULATION[i * 3 + 1],
          TRIANGULATION[i * 3 + 2],
        ].map((index) => keypoints[index]);
        //  Draw triangle
        drawPath(ctx, points, true);
      }

            // Draw Dots
            for (let i = 0; i < keypoints.length; i++) {
                const x = keypoints[i][0];
                const y = keypoints[i][1];
        
                ctx.beginPath();
                ctx.arc(x, y, 1 /* radius */, 0, 3 * Math.PI);
                ctx.fillStyle = "aqua";
                ctx.fill();
              }
                    
                });
      
    }
}