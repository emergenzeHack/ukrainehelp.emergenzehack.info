FROM ruby:latest 
COPY Gemfile /srv/jekyll/
COPY Gemfile.lock /srv/jekyll/
WORKDIR /srv/jekyll/
EXPOSE 4000
RUN gem install bundler; bundle update
