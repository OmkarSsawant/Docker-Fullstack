
.PHONY: compose-build
compose-up:
	docker compose build

.PHONY: compose-up
compose-up:
	docker compose up

.PHONY: compose-up-build
compose-up:
	docker compose up --build

.PHONY: compose-down
compose-up:
	docker compose down