/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Duration } from 'luxon';

/**
 * Deals with management and locking related to distributed tasks, for a given
 * plugin.
 *
 * @public
 */
export interface PluginTaskManager {
  acquireLock(
    id: string,
    options: {
      timeout: Duration;
    },
  ): Promise<
    | { acquired: false }
    | { acquired: true; release: () => void | Promise<void> }
  >;

  scheduleTask(
    id: string,
    options: {
      timeout: Duration;
      frequency: Duration;
      initialDelay?: Duration;
    },
    fn: () => Promise<void>,
  ): Promise<{ release: () => Promise<void> }>;
}
