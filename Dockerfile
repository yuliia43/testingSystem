# Dockerfile
FROM tomcat:9.0.17-jre11
ADD voting_backend.war webapps
