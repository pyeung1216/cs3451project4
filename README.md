# cs3451project4
Computer Graphics Project 4: GPU Programming

http://www.cc.gatech.edu/~turk/cs3451_2014_spring/hw4/hw4.html

Objective

The purpose of this assignment is to use the GPU (vertex and fragment processors) to carry out various rendering tasks. You will write three short fragment programs that carry out various rendering task. In addition, you will write one vertex program that will change the geometry of a simple surface dynamically. Please note that you must use Processing version 2.0+ for this project! (See note below.)

The Tasks

The code that you create will take the simple examples we provide and modify them to carry out a set of tasks. Here is a list of the four tasks:

Swiss Cheese

The first task is to take the polygon with transparent stripes and modify it so that the polygon has a number of circular holes. You will do this by modifying the alpha value on a per-fragment basis. In particular, you should create an array of holes on the polygon that are arranged in a grid of 3 by 3. Make sure that this polygon is the last one drawn, so the transparency will be handled correctly from all viewing directions.

Mandelbrot Set

The second task is to draw the fractal known as the Mandelbrot Set. You will take one of the squares from the example code and modify it so that you display a white Mandelbrot set on some colored background. The colors (and possibly color bands) for the background are for you to decide. Let z(n+1) = z(n)^2 + c, where z and c are both complex numbers. The Mandelbrot set is essentially a map of what happens when using different values of c (which correspond to different locations in the plane). Let z(0) = (0,0), and look at the values z(1)=z(0)^2+c, z(2)=z(1)^2+c, and so on. Plugging the result of a function back into itself is called iteration. If these iterated values stay near zero (never leave a circle of radius 2), then draw a white dot at the location c. If the values do leave the circle, color them something else. Do this for all the values for values of c such that cx is in [-2.1,0.9] and cy is in [-1.5,1.5]. The result is the Mandelbrot Set. Use 20 iterations of the function to create your Mandelbrot set.

Edge Detection

The third task is to perform what is called "edge detection" in the image processing literature. You will write a GLSL fragment program to perform several texture lookups in order to find edges in images. We will provide the input images as a texture (a picture of a duck). Since we wish to do this for a grey-scale image, and because the input image is in color, you will first have to convert color pixels to grey-scale values. You can compute the intensity value for a pixel by a weighted sum of the RGB values of the pixels with weights 0.2989, 0.5870, 0.1140 respectively (why these values? Remember human color perception theory?). Then you will use what is known as a Laplacian filter to estimate the "edge-ness" of a pixel. The Laplacian filter simply takes the values of the four surrounding pixels, sums them, and subtracts four times the value of the middle pixel. You will have to map the resulting value to the range of grey-scale values that can be displayed. You may need to multiply by a scaling factor to see the edges easily.

Mountain Generator

The fourth and final task is to write a vertex program to modify the geometry of a collection of polygons. Your task is to replace one of the quads with a "mountain generator". You will need to subdivide the original quad with many tiny quads by modifying the Processing code in P4.pde. Then your vertex program will displace these vertices along the normal vector using the intensity of the closest texel to the vertex (again convert to grey-scale as in part 3). Note that you will need to subdivide the quad in both x and y directions. Do *not* modify the geometry in the P4.pde file -- this must be done in the vertex shader! You should pass a collection of equal area, planar quads into the shader. You should subdivide the quad into at least a 20x20 grid, but no more than a 50x50 grid.
