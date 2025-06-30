export interface TempoResponseInterface {
  elapsed: number;
  lapTime: number;
  lapNumber: number;
  sector1: number;
  sector2: number;
  sector3: number;
  averageSpeed: number;
  driverName: string;
  isInPits: number | null;
  pitTime: number | null;
}

export interface TempoBodyInterface {
    eventId: string;
    session: string
    participant: string;
}

export interface TempoChartInterface {
  labels: string[];
  datasets: TempoChartDatasetInterface[]
}

export interface TempoChartDatasetInterface {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
  tension: number;
}
