import { BuffAction } from '../buff-action';
import { Buff } from '../../buff.enum';
import { Simulation } from '../../../simulation/simulation';
import { CraftingJob } from '../../crafting-job.enum';

export class InnerQuiet extends BuffAction {
  canBeClipped(): boolean {
    return false;
  }

  getLevelRequirement(): { job: CraftingJob; level: number } {
    return { job: CraftingJob.ANY, level: 11 };
  }

  _canBeUsed(simulationState: Simulation): boolean {
    // You can't use IQ if it's already there
    return super._canBeUsed(simulationState) && !simulationState.hasBuff(this.getBuff());
  }

  getBaseCPCost(simulationState: Simulation): number {
    return 18;
  }

  getDuration(simulation: Simulation): number {
    return Infinity;
  }

  getIds(): number[] {
    return [252, 253, 254, 255, 256, 257, 258, 259];
  }

  getBuff(): Buff {
    return Buff.INNER_QUIET;
  }

  getInitialStacks(): number {
    return 1;
  }

  getTick(): ((simulation: Simulation) => void) | undefined {
    return undefined;
  }
}
