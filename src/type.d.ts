/** @format */

interface BloodPressure {
    value: number;
    levels: string;
}

interface DiagnosisHistory {
    month: string;
    year: number;
    blood_pressure: {
        systolic: BloodPressure;
        diastolic: BloodPressure;
    };
    heart_rate: {
        value: number;
        levels: string;
    };
    respiratory_rate: {
        value: number;
        levels: string;
    };
    temperature: {
        value: number;
        levels: string;
    };
}

interface Diagnostic {
    name: string;
    description: string;
    status: string;
}

interface Patient {
    name: string;
    gender: string;
    age: number;
    profile_picture: string;
    date_of_birth: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
    diagnosis_history: DiagnosisHistory[];
    diagnostic_list: Diagnostic[];
    lab_results: string[];
}

// Define the API response type
type ApiResponse = Patient[];

type TPatient = {
    patient: Patient;
};
