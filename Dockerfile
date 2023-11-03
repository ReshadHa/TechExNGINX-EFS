#Using latest official Nginx image as base image
FROM nginx:latest

#Copy our custom Nginx config file into the container
#COPY nginx.conf etc/nginx/nginx.conf

#Copy our http content into the container
COPY html /usr/share/nginx/html

#Expose port 80 for http coms
EXPOSE 80