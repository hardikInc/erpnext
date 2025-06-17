# Pharmacy Service

This microservice isolates pharmacy functionality from ERPNext and refactors it into a standalone NestJS application aligned with FHIR R4. It provides basic endpoints for managing medications, stock levels, and dispensing logs.

## Running

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables for PostgreSQL connection if needed (`DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).
3. Start the service:

```bash
npm run start
```

The service listens on port `3000` by default.

## API Endpoints

- `POST /medications`
- `GET /medications`
- `POST /stock`
- `GET /stock`
- `POST /dispense`
- `GET /dispense?patient_id=...`

These endpoints store data in PostgreSQL using TypeORM and loosely map to FHIR resources (Medication, MedicationDispense).
