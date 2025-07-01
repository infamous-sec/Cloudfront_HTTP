#!/bin/bash
# Backup PostgreSQL DB (edit for your env)

DATE=$(date +%Y-%m-%d_%H%M)
docker exec twake_db pg_dump -U $DB_USER $DB_NAME > ./db_backups/twake_db_$DATE.sql