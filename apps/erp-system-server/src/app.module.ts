import { Module } from "@nestjs/common";
import { ClaimTypeModule } from "./claimType/claimType.module";
import { ClaimModule } from "./claim/claim.module";
import { CustomerModule } from "./customer/customer.module";
import { ExpenseModule } from "./expense/expense.module";
import { PaymentModule } from "./payment/payment.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";
import { MilestoneModule } from "./milestone/milestone.module";
import { ArticleModule } from "./article/article.module";
import { CategoryModule } from "./category/category.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ReportModule } from "./report/report.module";
import { OpportunityModule } from "./opportunity/opportunity.module";
import { LeadModule } from "./lead/lead.module";
import { ContactModule } from "./contact/contact.module";
import { EmployeeModule } from "./employee/employee.module";
import { LeaveModule } from "./leave/leave.module";
import { PayrollModule } from "./payroll/payroll.module";
import { InventoryModule } from "./inventory/inventory.module";
import { WarehouseModule } from "./warehouse/warehouse.module";
import { ShipmentModule } from "./shipment/shipment.module";
import { ConfigurationModule } from "./configuration/configuration.module";
import { ProductModule } from "./product/product.module";
import { ComponentModule } from "./component/component.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ClaimTypeModule,
    ClaimModule,
    CustomerModule,
    ExpenseModule,
    PaymentModule,
    InvoiceModule,
    ProjectModule,
    TaskModule,
    MilestoneModule,
    ArticleModule,
    CategoryModule,
    DashboardModule,
    ReportModule,
    OpportunityModule,
    LeadModule,
    ContactModule,
    EmployeeModule,
    LeaveModule,
    PayrollModule,
    InventoryModule,
    WarehouseModule,
    ShipmentModule,
    ConfigurationModule,
    ProductModule,
    ComponentModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
