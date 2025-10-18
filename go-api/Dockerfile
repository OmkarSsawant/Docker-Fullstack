#parse directive
#syntax=docker/docker:1.5
#escape=\



FROM golang:latest as build

WORKDIR  /app


COPY go.mod go.sum ./

RUN --mount=type=cache,target=/go/pkg/mod \
    --mount=type=cache,target=/root/.cache/go-build \
    go mod download




FROM build as dev


RUN go install github.com/air-verse/air@latest && \
go install github.com/go-delve/delve/cmd/dlv@latest 
#--mount=type=cache,target=/usr/local/go/bin \ 


COPY . .

EXPOSE 8080

CMD [ "air" ,"-c","/app/.air.toml"]



###
FROM build as prod-build

COPY . .


RUN useradd -u 1001 nonroot

RUN go build \
    -ldflags='-linkmode external -extldflags -static' \
    -tags netgo \
    -o server ./src/.


###
FROM scratch as prod

ENV GIN_MODE release

COPY --from=prod-build /etc/passwd /etc/passwd

# ARG enables build time args by --build-arg in cmd
# ENTRYPOINT used for docker container as tool in default if agr it overrides next CMD cmd as arg.
# ENTRYPOINT itself can be overriden by --entry-point <cmd>
# DOCKER_KIT=1 must be set before using cache,secret,etc.
# --mount=type=secret,id=sec.txt,dst=/contaner-sec.txt enable store secret only at build time
# For above during dc-cmd --secret id=sec.txt,src=local-sec.txt must be provided
# multi-arch builds can be deployed using buildx using QmeuQmeueu
#LABEL can be used to store metadata like author
#ADD is like COPY but has other use cases too 
COPY --from=prod-build /app/server .

USER nonroot

EXPOSE 8080

CMD [ "./server" ]


