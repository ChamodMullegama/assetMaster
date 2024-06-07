<template>
  <AppLayout title="ASSET MASTER">
    <template #header>
      <div class="pb-6 header">
        <div class="container-fluid">
          <div class="header-body">
            <div class="py-4 col align-items-center">
              <h6 class="mb-0 h2 text-maroon d-inline-block">Dashboard</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-block">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item">
                    <Link href="/">
                      <font-awesome-icon
                        icon="fa-solid fa-house"
                        class="text-maroon"
                      />
                    </Link>
                  </li>
                  <li
                    class="breadcrumb-item active text-maroon"
                    aria-current="page"
                  >
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #content>
      <div class="mt-0 row">
        <div class="col-md-12 mt-1">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-12">
              <div class="mb-4 card">
                <div class="p-3 card-body">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p
                          class="mb-0 text-sm text-uppercase text-maroon font-weight-bold"
                        >
                          LIVE ASSETS
                        </p>
                        <h5 class="font-weight-bolder text-maroon">
                          {{ live_assets }}
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-right">
                      <div
                        class="text-center icon icon-shape bg-gradient-danger shadow-danger rounded-circle"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-hands-holding-circle"
                          style="color: white"
                          size="xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12">
              <div class="mb-4 card">
                <div class="p-3 card-body">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p
                          class="mb-0 text-sm text-uppercase font-weight-bold text-maroon"
                        >
                          LOCATIONS
                        </p>
                        <h5 class="font-weight-bolder text-maroon">
                          {{ locations }}
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-right">
                      <div
                        class="text-center icon icon-shape bg-gradient-success shadow-warning rounded-circle"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-location-dot"
                          style="color: white"
                          size="xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12">
              <div class="mb-4 card">
                <div class="p-3 card-body">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p
                          class="mb-0 text-sm text-uppercase font-weight-bold text-maroon"
                        >
                          ALLOCATED TASKS
                        </p>
                        <h5 class="font-weight-bolder text-maroon">
                          {{ allocated_tasks }}
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-right">
                      <div
                        class="text-center icon icon-shape bg-gradient-dark shadow-warning rounded-circle"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-tasks"
                          style="color: white"
                          size="xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12">
              <div class="mb-4 card">
                <div class="p-3 card-body">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p
                          class="mb-0 text-sm text-uppercase font-weight-bold text-maroon"
                        >
                          PENDING TASKS
                        </p>
                        <h5 class="font-weight-bolder text-maroon">
                          {{ pending_tasks }}
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-right">
                      <div
                        class="text-center icon icon-shape bg-gradient-warning shadow-warning rounded-circle"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-arrow-left"
                          style="color: white"
                          size="xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHandsHoldingCircle,
  faLocationDot,
  faDollarSign,
  faClock,
  faHandHoldingDollar,
  faChartSimple,
  faClockRotateLeft,
  faFolderOpen,
  faArrowUpRightFromSquare,
  faFileInvoice,
  faHouse,
  faListCheck,
  faPenToSquare,
  faUsersViewfinder,
  faPeopleCarryBox,
  faArrowRightArrowLeft,
  faReceipt,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
</script>

<style lang="scss" scoped></style>
