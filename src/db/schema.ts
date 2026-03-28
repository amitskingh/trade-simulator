import { timestamp, boolean } from 'drizzle-orm/pg-core';

export const baseColumns = {
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),

  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),

  deletedAt: timestamp('deleted_at', { withTimezone: true }),

  isDeleted: boolean('is_deleted').default(false).notNull(),
};
