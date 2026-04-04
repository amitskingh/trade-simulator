import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  boolean,
  doublePrecision,
  numeric,
  pgEnum,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export const baseColumns = {
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),

  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),

  deletedAt: timestamp('deleted_at', { withTimezone: true }),

  isDeleted: boolean('is_deleted').default(false).notNull(),
};

// export const orderSideEnum = pgEnum("order_side", ["BUY", "SELL"]);
// // ENUMS
// export const orderStatusEnum = pgEnum("order_status", [
//   "OPEN",
//   "PARTIAL",
//   "FILLED",
//   "CANCELLED",
// ]);

// USER
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  ...baseColumns,
});

/*
// WALLET
export const wallets = pgTable(
  "wallets",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    currency: varchar("currency", { length: 10 }).notNull(),
    available: numeric("available", { precision: 18, scale: 10 }).default("0").notNull(),
    locked: numeric("locked", { precision: 18, scale: 10 }).default("0").notNull(),
    ...baseColumns,
  },
  (table) => ({
    uniqueUserCurrency: uniqueIndex("user_currency_idx").on(
      table.userId,
      table.currency,
    ),
  })
);


// ORDER
export const orders = pgTable("orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  symbol: varchar("symbol", { length: 20 }).notNull(),
  side: orderSideEnum("side").notNull(),
  price: doublePrecision("price").notNull(),
  quantity: doublePrecision("quantity").notNull(),
  remaining: doublePrecision("remaining").notNull(),
  status: orderStatusEnum("status").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

*/
