import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sale",
  title: "Sale",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Sale Title",
      validation: (Rule) =>
        Rule.required().min(3).warning("A sale title is required."),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Sale Description",
      description: "A brief description of the sale (optional).",
    }),
    defineField({
      name: "discountAmount",
      type: "number",
      title: "Discount Amount",
      description:
        "Discount value (can be a percentage or a fixed amount).",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "couponCode",
      type: "string",
      title: "Coupon Code",
      validation: (Rule) =>
        Rule.regex(/^[A-Za-z0-9]+$/, {
          name: "alphanumeric",
          invert: false,
        }).warning("Coupon codes should be alphanumeric."),
    }),
    defineField({
      name: "validFrom",
      type: "datetime",
      title: "Valid From",
      validation: (Rule) =>
        Rule.required().warning("A start date is required."),
    }),
    defineField({
      name: "validUntil",
      type: "datetime",
      title: "Valid Until",
      validation: (Rule) =>
        Rule.required().warning("An end date is required."),
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      title: "Is Active",
      description: "Toggle to activate/deactivate the sale.",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, discountAmount, couponCode, isActive } = selection;
      const status = isActive ? "Active" : "Inactive";
      return {
        title,
        subtitle: `${discountAmount || 0}${
          typeof discountAmount === "number" ? "%" : ""
        } off - Code: ${couponCode || "N/A"} - ${status}`,
      };
    },
  },
});
